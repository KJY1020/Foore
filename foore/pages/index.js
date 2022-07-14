import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();

    const clickQrcode = () => {
        router.push(`/qrcode`);
    }

    const clickFoodWaste = () => {
        router.push(`/foodwaste`);
    }

    const clickMonthly = () => {
        router.push(`/monthly`);
    }

    return(
        <div>
            <div>
        <button onClick={clickQrcode}>QRCODE</button>
            </div>
        <div>
        <button onClick={clickFoodWaste}>FOODWASTE</button>
        </div>
        <div>
        <button onClick={clickMonthly}>MONTHLY OPTION</button>
        </div>
        </div>
    );
}