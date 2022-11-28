/* eslint-disable @typescript-eslint/naming-convention */
import	React, {ReactElement}		from	'react';

type TTooltip = {
	active?: boolean,
	items: TTooltipItem[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any
	label?: number
};

type TTooltipItem = {
	name: string,
	symbol: string
}

function ToolTip(props: TTooltip): ReactElement | null {
	const {active, items, payload} = props;

	if (active && payload) {
		return (
			<div className={'p-2 bg-good-ol-grey-300 rounded opacity-90'}>
				<p>{`Day ${payload[0].payload.name}`}</p>
				<p><span className={'font-semibold'}>{`${items[1].name}:  `}</span>{`${payload[1].value} ${items[1].symbol}`}</p>
				<p><span className={'font-semibold'}>{`${items[0].name}:  `}</span>{`${payload[0].value} ${items[0].symbol}`}</p>
			</div>
		);
	}

	return null;
}

export default ToolTip;