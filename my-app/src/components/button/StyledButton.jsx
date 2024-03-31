import styled from "styled-components";

export const StyledButton = styled.button.attrs(props=>({
	onClick: props.onClick,
	disabled: props.disabled,
	type: props.type,
}))`
width: ${props=>props.width};
height: ${props=>props.height};
font-size: ${props=>props.fontSize};
border: ${props=>props.borderWidth+" "+props.borderType+" "+props.borderColor};
border-radius: ${props=>props.borderRadius};
color: ${props=>props.color};
transition: all .3s;
z-index: 1;
position: relative;
&:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props=>props.backgroundColor};
    border-radius: ${props=>props.borderRadius};
    z-index: -2;
}
&:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #1b1b1b;
    transition: all .3s ease;
    border-radius: ${props=>props.borderRadius};
    z-index: -1;
}
&:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
}
`
