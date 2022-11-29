import React, { ChangeEvent, useState } from "react";
import tw, { styled } from "twin.macro";
import ActionButton from "../elements/ActionButton";
import Section from "../elements/Section";
import useMediaQuery from "../utils/media/media";

const CardHeader = styled.h1`
    ${tw`font-extrabold text-xl md:text-4xl my-0 [text-align: center]`}
`;
const CardSubheader = styled.h1`
    ${tw`text-base md:text-lg [text-align: center]`}
`;

const CardContainer = styled.div`
    ${tw`
        text-black md:text-gray-800 rounded-3xl shadow-black shadow-xl mx-8 
        [width: 80%] md:[width: 800px] [min-height: 550px] md:[min-height: 600px] 
        [background-color:#fafafa] 
    `}
`;

const CardContentWrapper = styled.div`
    ${tw`px-2 md:px-8 py-8`}
`;

const FormWrapper = styled.form`
    ${tw`grid grid-cols-1 md:grid-cols-2 place-content-center`}
`;

const StyledInput = styled.input`
    ${tw`mb-2 [height: 28px] [width: 100%]`}
`;

const StyledSelect = styled.select`
    ${tw`mb-2 [height: 40px] [width: 100%]`}
`;

const FormItem = styled.div<{span: number}>`
    grid-column: span ${props => props.span} / span ${props => props.span};
    ${tw`flex-row mx-10 md:mx-16`}
`;


const RegForm = () : JSX.Element => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const longItemSpan = isDesktop ? 2 : 1;
    type form = {
        name: string,
        phoneNo: string,
        email: string,
        courseType: string,
        courseSchedule: string
    }

    const [formData, setFormData] = useState<form>({
        name: "",
        phoneNo: "",
        email: "",
        courseType: "",
        courseSchedule: ""
    });

    const handleFormChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // console.log(e.target.name, e.target.value);
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = () => {
        if (formData.name === "" || formData.email === "" || formData.phoneNo === "") {
            ;
        } else if (!formData.email.includes("@")) {
            ;
        } else {
            alert(formData.name);
        }
    }

    //

    
    return(
        <CardContainer>
            <CardContentWrapper>
                <CardHeader>Form Registrasi</CardHeader>
                <CardSubheader>Setelah registrasi, kami akan mengirm email konfirmasi ke inbox kamu!</CardSubheader>
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
                    <FormItem span={1}>
                        <p>Nomor HP</p>
                        <StyledInput
                            name="phoneNo"
                            type="text"
                            value={formData.phoneNo} 
                            placeholder="Nomor yang bisa dikontak via WA..."
                            onChange={handleFormChange}
                        />
                    </FormItem>
                    <FormItem span={1}>
                        <p>E-mail</p>
                        <StyledInput
                            name="email"
                            type="email"
                            value={formData.email} 
                            placeholder="Alamat e-mail anda..." 
                            onChange={handleFormChange}
                        />
                    </FormItem>
                    <FormItem span={longItemSpan}>
                        <p>Pilihan Kursus</p>
                        <StyledSelect
                            name="courseType"
                            value={formData.courseType}
                            onChange={handleFormChange}
                        >
                            <option>Test</option>
                            <option>Test2</option>
                            <option>Test3</option>
                        </StyledSelect>
                    </FormItem>
                    <FormItem span={longItemSpan}>
                        <p>Jadwal Kursus</p>
                        <StyledSelect
                            name="courseSchedule"
                            value={formData.courseSchedule}
                            onChange={handleFormChange}
                        >
                            <option>Test</option>
                            <option>Test!</option>
                            <option>Test!!</option>
                        </StyledSelect>
                    </FormItem>
                </form>
                <Section.RowWrapper>
                    <FormItem span={longItemSpan}>
                        <ActionButton 
                            // style={{marginBottom: "36px", marginTop: "18px"}}
                            onClick={e => handleFormSubmit()}
                        >
                            Daftar!
                        </ActionButton>
                    </FormItem>
                </Section.RowWrapper>
            </CardContentWrapper>

        </CardContainer>
    );
}

export default RegForm;