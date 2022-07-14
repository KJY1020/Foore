import Image from 'next/image'

export default function Qrcode() {
    return(
        <a href="https://www.the-qrcode-generator.com/scan" target="_blank">
            <img src="./qrcode.png"/>
        </a>
    )
}