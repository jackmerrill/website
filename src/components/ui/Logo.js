import { Box, Icon, Text } from "@chakra-ui/react";

const IconWhite = () => (
    <svg width="20%" height="20%" viewBox="0 0 1080 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"  fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2">
        <g transform="matrix(1.87667,0,0,1.87667,-211.69,-370.379)">
            <path d="M330.006,585.343L506.715,408.388C513.207,401.887 513.2,391.339 506.699,384.847C500.198,378.355 489.65,378.363 483.158,384.863L306.448,561.819C299.956,568.32 299.964,578.868 306.465,585.36C312.965,591.852 323.514,591.844 330.006,585.343Z" fill="white"/>
        </g>
        <g transform="matrix(1.87667,0,0,1.87667,-45.877,-370.379)">
            <path d="M330.006,585.343L506.715,408.388C513.207,401.887 513.2,391.339 506.699,384.847C500.198,378.355 489.65,378.363 483.158,384.863L306.448,561.819C299.956,568.32 299.964,578.868 306.465,585.36C312.965,591.852 323.514,591.844 330.006,585.343Z" fill="white"/>
        </g>
        <g transform="matrix(1.87667,0,0,1.87667,119.936,-370.379)">
            <path d="M330.006,585.343L506.715,408.388C513.207,401.887 513.2,391.339 506.699,384.847C500.198,378.355 489.65,378.363 483.158,384.863L306.448,561.819C299.956,568.32 299.964,578.868 306.465,585.36C312.965,591.852 323.514,591.844 330.006,585.343Z" fill="white"/>
        </g>
        <g transform="matrix(1.87667,0,0,1.87667,-473.399,-473.402)">
            <path d="M362.424,611.832L534.257,439.76C540.749,433.259 551.297,433.252 557.798,439.744C564.299,446.235 564.306,456.784 557.815,463.285L381.105,640.24C379.514,641.833 377.679,643.037 375.72,643.85L375.686,643.864C373.726,644.676 371.578,645.124 369.326,645.124L268.899,645.124C259.712,645.124 252.253,637.665 252.253,628.478C252.253,619.29 259.712,611.832 268.899,611.832L362.424,611.832Z" fill="white"/>
        </g>
    </svg>
)

const IconBlack = () => (
    <svg width="100%" height="100%" viewBox="0 0 1080 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
        <g transform="matrix(1,0,0,1,51.0993,54.8966)">
            <path d="M318.227,573.581L494.937,396.626" fill="none" stroke="black" strokeWidth="33.29px"/>
        </g>
        <g transform="matrix(1,0,0,1,139.454,54.8966)">
            <path d="M318.227,573.581L494.937,396.626" fill="none" stroke="black" strokeWidth="33.29px"/>
        </g>
        <g transform="matrix(1,0,0,1,227.809,54.8966)">
            <path d="M318.227,573.581L494.937,396.626" fill="none" stroke="black" strokeWidth="33.29px"/>
        </g>
        <g transform="matrix(1,0,0,1,316.164,54.8966)">
            <path d="M318.227,573.581L494.937,396.626" fill="none" stroke="black" strokeWidth="33.29px"/>
        </g>
        <g transform="matrix(1.26178,0,0,0.450704,-2.32756,345.22)">
            <path d="M294.548,628.478L214.957,628.478" fill="none" stroke="black" strokeWidth="35.14px"/>
        </g>
    </svg>
)

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        {props.variant === "light" ? <IconWhite /> : <IconBlack />}
      </Text>
    </Box>
  );
}