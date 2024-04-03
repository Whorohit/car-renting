import Image from 'next/image';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5"
// interface ImageUploadProps {
//     label?: string;
//     value?: string;
//     disabled?: boolean;
//     onChange?:(base64: string) =>string

// }
interface ImageUploadProps {
    label?: string;
    disabled?: boolean;
    onChange?: (file: File) => void;
    value:string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, label, disabled,value }) => {
    // const [base64, setbase64] = useState(value)
    // const handleChange = useCallback(
    //    (base64: string) => {
    //      onChange(base64).then((a)=>{
    //         console.log(a);
    //         setbase64(a)
    //      })

           
    //     },
    //     [onChange],
    // )
    // const handledrop = useCallback(
    //     (files: any) => {
    //         const file = files[0];
    //         handleChange(file)
            
    //         // const reader = new FileReader();

    //         // reader.onload = (event: any) => {
    //         //     setbase64(event.target.result)
    //         //     handleChange(event.target.result)
    //         // }
    //         // reader.readAsDataURL(file);
    //     },
    //     [handleChange],
    // )
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>(value);

    const handleDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setImageFile(file);
        setImageUrl(URL.createObjectURL(file)); 
        if (onChange) {
            onChange(file);
        }
    }, [onChange]);

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        onDrop: handleDrop,
        disabled,
        accept: {
            'image/jpeg': [],
            'image/jpg': [],
            'image/png': []
        }

    })
    return (
        <div
            {...getRootProps({ className: "md:w-[40%]  w-full   mx-auto p-4 text-black border-2  h-[20rem]  border-dotted  rounded-md border-neutral-700 " })}>

            <input type="text" {...getInputProps()} />
            <div className='flex justify-center p-10 flex-col items-center text-neutral-500 transition-colors duration-300 hover:text-blue-500' >
                {!value ? <> <IoCloudUploadOutline size={100} className='' />
                    <h1 className='font-bold '> Upload   {label}</h1></> : ""}
            </div>
            {
                value ? (<div className='flex justify-center items-center'>
                    <Image src={value}
                        height={100}
                        width={100}
                        alt='Upload Iamge' />
                </div>) : (
                    <div className=''>
                        <p className='text-white'>{label}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ImageUpload