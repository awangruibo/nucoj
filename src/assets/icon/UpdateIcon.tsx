import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const UpdateSvg = () => (
    <svg d="1664875896399" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="4223" width="14" height="14">
        <path
            d="M70.997333 559.5136c0-0.273067 0-0.546133-0.136533-0.750933A431.3088 431.3088 0 0 1 68.266667 511.931733 444.2112 444.2112 0 0 1 512 68.266667a442.368 442.368 0 0 1 358.536533 183.773866h-149.9136l-4.096-0.2048a34.338133 34.338133 0 1 0 0 68.744534c1.365333 0 2.730667-0.136533 4.096-0.273067h191.010134l0.136533 0.341333s74.683733-0.2048 74.683733-0.341333h0.136534c-23.278933-65.536-68.334933-118.5792-68.334934-118.5792A510.088533 510.088533 0 0 0 512 0C229.717333 0 0 229.649067 0 511.931733c0 15.223467 0.8192 30.378667 2.2528 45.124267v2.4576a34.474667 34.474667 0 0 0 68.676267 0zM1023.112533 492.7488h-0.682666a34.474667 34.474667 0 0 0-68.744534 1.6384c0 3.6864 0.546133 7.3728 1.774934 10.717867 0.2048 2.321067 0.273067 4.573867 0.273066 6.894933a444.074667 444.074667 0 0 1-443.665066 443.5968 442.7776 442.7776 0 0 1-342.903467-163.157333h144.5888c1.365333 0.341333 2.798933 0.341333 4.164267 0.341333 1.365333 0 2.798933 0 4.096-0.273067h1.570133v-0.341333a34.269867 34.269867 0 0 0 0-67.7888v-0.136533h-1.706667a38.570667 38.570667 0 0 0-8.260266 0H50.312533s9.147733 43.349333 68.266667 113.664C213.333333 950.545067 353.553067 1024 512 1024 794.350933 1024 1024 794.350933 1024 512c0-6.5536-0.682667-12.834133-0.887467-19.2512z"
            p-id="4224" fill="#ffffff"></path>
    </svg>
);

/**
 * 文章更新图标
 * @param props
 * @constructor
 */
const UpdateIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={UpdateSvg} {...props} />
);

export default UpdateIcon