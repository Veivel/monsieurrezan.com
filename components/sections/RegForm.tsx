import React, { ChangeEvent, useRef, useState } from "react";
import ActionButton from "../constants/buttons/ActionButton";
import Section from "../constants/Section";
import useMediaQuery from "../utils/media/media";
import emailjs from '@emailjs/browser';
import { FormItem, StyledInput, StyledSelect } from "../constants/Form";
import { CardContainer, CardContentWrapper, CardHeader, CardSubheader } from "../constants/PageCard";
import { FORM_TYPE } from "../../types/form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Reaptcha from 'reaptcha';

const RegForm = () : JSX.Element => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const longItemSpan = isDesktop ? 2 : 1;
    const [isVerified, setIsVerified] = useState<boolean>(false);

    const [formData, setFormData] = useState<FORM_TYPE>({
        name: "",
        phoneNo: "",
        email: "",
        courseType: "",
        courseSchedule: ""
    });

    // deprecated
    const sendEmail = () => {
        axios.post('/api/submit-form',{
            body: JSON.stringify(formData),
        })
        .then(
            response => console.log(response)
        )
    }

    const onVerify = (recaptchaResponse:any) => {
        setIsVerified(true);
      };

    const handleFormChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // console.log(e.target.name, e.target.value);
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = () => {
        const notif = toast.loading('Loading...');
        if (!isVerified){
            toast.dismiss(notif);
            toast.error("Mohon lengkapi box ReCAPTCHA.");

        } else if (formData.name === "" || formData.email === "" || formData.phoneNo === "") {
            toast.dismiss(notif);
            toast.error("Data tidak boleh kosong.");
            
        } else if (formData.courseType === "Pilih salah satu..." || formData.courseSchedule === "Pilih salah satu..." 
                || formData.courseType === "" || formData.courseSchedule === "") {
            toast.dismiss(notif);
            toast.error("Data tidak boleh kosong.");

        } else if (!formData.email.includes("@")) {
            toast.dismiss(notif);
            toast.error("Periksa kembali alamat e-mail anda.");

        } else {
            // Send confirmation e-mail to recipient
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, 
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, 
                {
                    'to_email': formData.email,
                    'data': formData,
                    'site_url': window.location.origin.toString(),
                }, 
                process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY
            )
            .then(result => {
                // Send second e-mail to admin (hard-coded email address)
                emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN as string,
                    {
                        data: formData,
                        metadata: {
                            'date': String(new Date()),
                            'browser': navigator.userAgent,
                            'platform': navigator.platform,
                        },
                        'site_url': window.location.origin.toString(),
                    },
                    process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY
                )
            })
            .then(result => {
                toast.dismiss(notif);
                // toast.success("Anda berhasil melakukan pendaftaran!");
                window.location.replace("/daftar/success");
            })
            .catch(error => {
                toast.dismiss(notif);
                toast.error("Periksa kembali data anda!");

                console.log("Error: ", error);
            })
        }
    }
    
    return(
        <CardContainer>
            <CardContentWrapper>
                <CardHeader>Form Registrasi</CardHeader>
                <p className="text-center mb-4 md:mb-8 px-6 md:px-0 text-sm md:text-lg">Setelah registrasi, kami akan mengirm email konfirmasi ke inbox kamu!</p>
                <form>
                    <FormItem span={longItemSpan}>
                        <p>Nama</p>
                        <StyledInput
                            name="name"
                            type="text"
                            value={formData.name} 
                            placeholder="Nama lengkap anda..."
                            onChange={handleFormChange}
                        />
                    </FormItem>
                    <div className="">
                        <FormItem span={longItemSpan} className="w-full md:flex md:flex-row">
                            <div className="md:w-[50%] pr-20 md:pr-36">
                                <p>No. HP</p>
                                <StyledInput
                                    name="phoneNo"
                                    type="text"
                                    value={formData.phoneNo} 
                                    placeholder="Nomor anda..."
                                    onChange={handleFormChange}

                                />
                            </div>
                            <div className="md:w-[50%] pr-20 md:pr-32">
                                <p>E-mail</p>
                                <StyledInput
                                    name="email"
                                    type="email"
                                    value={formData.email} 
                                    placeholder="Alamat e-mail anda..." 
                                    onChange={handleFormChange}

                                    />
                            </div>
                        </FormItem>
                    </div>
                    <FormItem span={longItemSpan}>
                        <p>Pilihan Kursus</p>
                        <StyledSelect
                            name="courseType"
                            value={formData.courseType}
                            onChange={handleFormChange}
                        >
                            <option selected hidden>Pilih salah satu...</option>
                            <option>Français - A1</option>
                            <option>Français - A2</option>
                            <option>Jepang</option>
                        </StyledSelect>
                    </FormItem>
                    <FormItem span={longItemSpan}>
                        <p>Jadwal Kursus</p>
                        <StyledSelect
                            name="courseSchedule"
                            value={formData.courseSchedule}
                            onChange={handleFormChange}
                        >
                            <option selected hidden>Pilih salah satu...</option>
                            <option>19:30 setiap Selasa dan Kamis</option>
                            <option>19:30 setiap Senin dan Rabu</option>
                            <option>10:00 setiap Jumat dan Minggu</option>
                        </StyledSelect>
                    </FormItem>
                    <Reaptcha 
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITEKEY as string}
                        onVerify={onVerify} 
                        className="mx-auto w-fit"
                    />
                </form>
                <Section.RowWrapper>
                    <FormItem span={longItemSpan}>
                        { isVerified ?
                            <ActionButton onClick={e => handleFormSubmit()}>
                                Daftar!
                            </ActionButton> 
                        : <></>}
                    </FormItem>
                </Section.RowWrapper>
            </CardContentWrapper>
            <Toaster />
        </CardContainer>
    );
}

export default RegForm;