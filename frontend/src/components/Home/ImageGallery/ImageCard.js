import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['500'],
});

const redhat = Red_Hat_Display({
    subsets: ['latin'],
    weight: ['300'],
});

const ImageCard = (props) => {

    const {details} = props.data;

    return (
        <div className="p-8">
        <div 
        style={{backgroundImage: `url(${details.imgUrl})`}} 
        className="hover:scale-110 ease-in duration-300 h-96 mx-auto text-center rounded-[40px]  shadow-3xl bg-cover">   
        </div>
        </div>
    )
}

export default ImageCard;