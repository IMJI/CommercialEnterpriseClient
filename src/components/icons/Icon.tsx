import React from 'react';

const iconPath = "./icons.svg"

type Props = {
    name: string,
    color?: string,
    size?: number,
    outlined?: boolean;
    stroke?: number;
}

const Icon = (props: Props) => {
    const p = {
        name: props.name,
        color: props.color || '#000000',
        size: props.size || 16,
        stroke: props.stroke || 1
    }
    if (props.outlined) {
        return OutlinedIcon(p);
    }
    return FilledIcon(p)
}

const FilledIcon = ({ name, color, size, }: Props) => (
    <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
        <use xlinkHref={`${iconPath}#${name}`} />
    </svg>
);

const OutlinedIcon = ({ name, color, size, stroke }: Props) => (
    <svg className={`icon icon-${name}`} stroke={color} fill="none" width={size} height={size} strokeWidth={stroke}>
        <use xlinkHref={`${iconPath}#${name}`} />
    </svg>
);

export default Icon;
