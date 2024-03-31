import styled from 'styled-components';

export const StyledProgressBar = styled.div`
	position: relative;
	border: ${(props) =>
		props.type === 'circle' || props.type === 'pie'
			? 'none'
			: props.borderWidth + ' solid ' + props.borderColor};
	width: ${(props) => props.width};
	height: ${(props) =>
		props.type === 'circle' || props.type === 'pie' ? props.width : props.height};
	background-color: inherit;
	display: inline-grid;
	place-content: center;
	&:before {
		display: inline-grid;
		place-content: center;
		content: '${(props) => (props.type !== 'circle' ? props.procent : '')}';
		position: absolute;
		border-radius: ${(props) =>
			props.type === 'circle' || props.type === 'pie' ? '50%' : 'none'};
		inset: 0;
		background: ${(props) =>
			props.type === 'circle' || props.type === 'pie'
				? 'conic-gradient(' + props.color + ' ' + props.procent + ',#0000 0);'
				: 'linear-gradient(' +
				  props.degree +
				  'deg,' +
				  props.color +
				  ' ' +
				  props.procent +
				  ', #0000 0)'};
		mask: ${(props) =>
			props.type === 'circle'
				? 'radial-gradient(farthest-side,#0000 80%,#000 82% );'
				: 'none'};
	}
`;
