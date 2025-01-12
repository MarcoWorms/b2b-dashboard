import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

function	LogoElement(props: SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 40,
		height: 38
	};

	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 40 38'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<mask
				id={'mask0_975_520'}
				style={{maskType: 'alpha'}}
				maskUnits={'userSpaceOnUse'}
				x={'0'}
				y={'0'}
				width={'40'}
				height={'38'}>
				<path d={'M15.4979 28.8883C9.9487 31.6546 3.44001 28.8787 0.960293 22.6883C-1.51942 16.4977 0.968871 9.23676 6.51804 6.47045C12.0672 3.70414 18.5758 6.48003 21.0556 12.6705C23.5353 18.861 21.047 26.122 15.4979 28.8883Z'} fill={'#0c0c0c'}/>
				<path d={'M35.4875 16.2617C31.6458 18.1769 27.1397 16.2552 25.423 11.9694C23.7064 7.68364 25.429 2.65684 29.2707 0.741667C33.1125 -1.1735 37.6185 0.748309 39.3351 5.03403C41.0519 9.31983 39.3293 14.3466 35.4875 16.2617Z'} fill={'#0c0c0c'}/>
				<path d={'M32.7936 37.4025C29.6989 38.9452 26.0691 37.3971 24.6862 33.9447C23.3033 30.4923 24.6909 26.4429 27.7857 24.9002C30.8804 23.3574 34.5102 24.9055 35.8931 28.3579C37.276 31.8103 35.8883 35.8597 32.7936 37.4025Z'} fill={'#0c0c0c'}/>
			</mask>
			<g mask={'url(#mask0_975_520)'}>
				<path d={'M1.67403 27.0787C7.15223 38.5227 21.5311 43.6543 33.7903 38.5404C46.0495 33.4265 51.5465 20.0037 46.0683 8.55968C40.5902 -2.88426 26.2113 -8.01581 13.9521 -2.90192C1.69295 2.21191 -3.80414 15.6348 1.67403 27.0787Z'} fill={'white'}/>
				<path d={'M10.1146 24.5987C13.0355 31.8604 20.7021 35.1166 27.2384 31.8716C33.7747 28.6266 36.7056 20.1093 33.7848 12.8476C30.864 5.58599 23.1974 2.32974 16.661 5.57481C10.1247 8.8197 7.19375 17.337 10.1146 24.5987Z'} fill={'currentcolor'}/>
			</g>
		</svg>
	);
}

export default LogoElement;



