import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();

    const clickFruit = () => {
        router.push(`/foodwaste/fruit`);
    }

    const clickMeat = () => {
        router.push(`/foodwaste/meat`);
    }

    const clickFish = () => {
        router.push(`/foodwaste/fish`);
    }

    const clickShell = () => {
        router.push(`/foodwaste/shell`);
    }

    
    return(
        <div>
            <div>
                <button onClick={clickFruit}>과채류</button>
            </div>
            <div>
                <button onClick={clickMeat}>육류</button>
            </div>
            <div>
                <button onClick={clickFish}>생선류</button>
            </div>
            <div>
                <button onClick={clickShell}>어패류</button>
            </div>
            <div>
                <a href="https://www.google.com/">
                    <input type="button" value="기타"/>
                </a>
            </div>
        </div>
    );
}