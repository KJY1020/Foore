import { useRouter } from 'next/router';

export default function index() {
    
    return(
        <div>
            <select>
                <option value=""disabled selected>육류</option>
                <option value="bone">🦴뼈🦴</option>
                <option value="cartilage">💀연골💀</option>
                <option value="fat">🍖비계🍖</option>
                <option value="fur">🪶털🪶</option>
            </select>
        </div>
    );
}