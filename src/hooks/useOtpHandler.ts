import { useRef } from "react";

interface IUseOtpProps {
  noOfFields: number;
}

const useOtpHandler = ({ noOfFields }: IUseOtpProps) => {
  const inputRefs = useRef(new Array(noOfFields).fill(""));
};

export default useOtpHandler;
