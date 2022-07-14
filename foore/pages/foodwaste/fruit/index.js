import { useRouter } from 'next/router';

export default function index() {
    
    return(
        <div>
            <select>
                <option value=""disabled selected>과채류</option>
                <option value="apple">🍎사과🍎</option>
                <option value="apple">🍐배🍐</option>
                <option value="apple">🍉수박🍉</option>
                <option value="apple">🧅양파🧅</option>
            </select>
        </div>
    );
}