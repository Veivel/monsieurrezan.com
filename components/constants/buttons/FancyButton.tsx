import tw, { styled } from "twin.macro";

const FancyButton = styled.button`
    background-color: #6f8197;
    border: 2px solid #422800; 
    border-radius: 20px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600; font-size: 16px;
    color: #ffffff;
    padding: 0 18px;
    line-height: 25px;
    text-align: center;
    align-self: end;
    touch-action: manipulation;
    
    &:hover {
        background-color: #1c375b;
    }
    &:active {
        box-shadow: #422800 2px 2px 0 0;
        transform: translate(2px, 2px);
    }
`;

export default FancyButton;