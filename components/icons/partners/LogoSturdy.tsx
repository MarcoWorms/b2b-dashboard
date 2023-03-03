import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

function	LogoSturdy(props: SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 28,
		height: 40
	};

	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 28 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path d={'M6.07884 35.4307L10.6009 40L21.2018 29.2884L16.6798 24.7191L6.07884 35.4307ZM18.3107 23.0711L22.8328 27.6404L27.3548 23.0711L22.8328 18.5019L18.3107 23.0711ZM21.2018 4.56929L16.6798 0L6.07884 10.7116L10.6009 15.2809L21.2018 4.56929ZM10.6009 27.6404L21.2018 16.9288L16.6798 12.3596L6.07884 23.0711L10.6009 27.6404ZM4.52207 12.3596L0 16.9288L4.52207 21.4981L9.04413 16.9288L4.52207 12.3596Z'} fill={'black'}/>
		</svg>
	);
}

export default LogoSturdy;



