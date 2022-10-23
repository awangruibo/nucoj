import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const NoticeSvg = () => (
    <svg d="1664871941497" className="icon" viewBox="0 0 1130 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="2575" width="30" height="30">
        <path
            d="M1045.295643 1020.414871H78.260754A78.402121 78.402121 0 0 1 0 942.041023V275.184757a78.430394 78.430394 0 0 1 78.260754-78.402121h321.100934c0.763382-2.120505 1.102662-4.325829 2.318418-6.304967L500.128063 30.676447A69.411182 69.411182 0 0 1 556.392117 3.081615h0.056547a77.72356 77.72356 0 0 1 61.918732 31.2421l1.866044 2.770793 95.959899 159.688128h329.102304a78.402121 78.402121 0 0 1 78.260754 78.402121V942.041023a78.373848 78.373848 0 0 1-78.260754 78.373848zM563.91284 73.680279a10.432882 10.432882 0 0 0-7.49245-3.392807h-0.028273a5.117484 5.117484 0 0 0-2.233598 0.424101l-77.55392 126.071063h161.299712l-73.991471-123.102357z m492.579067 201.504478a11.365904 11.365904 0 0 0-11.196264-11.224537H78.260754a11.365904 11.365904 0 0 0-11.196264 11.224537V942.041023c0 6.050506 5.145758 11.196264 11.196264 11.196264h967.034889a11.365904 11.365904 0 0 0 11.196264-11.196264V275.184757z m-285.08063 265.289254H251.548385a33.560518 33.560518 0 0 1-33.532245-33.588792c0-18.57562 15.013172-33.617065 33.532245-33.617065h519.862892c18.519073 0 33.532245 15.041446 33.532245 33.617065 0 18.547346-15.013172 33.588792-33.532245 33.588792zM244.084209 700.982068h335.407271a33.588792 33.588792 0 0 1 0 67.205857H244.084209a33.588792 33.588792 0 1 1 0-67.205857z"
            p-id="2576"></path>
    </svg>
);

/**
 * 公告图标
 * @param props
 * @constructor
 */
const NoticeIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={NoticeSvg} {...props} />
);

export default NoticeIcon
