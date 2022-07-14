import { useRouter } from 'next/router';

export default function index() {
    
    return(
        <div>
            <select>
                <option value=""disabled selected>어패류</option>
                <option value="shell">🐚패각🐚</option>
                <option value="gut">🦀내장🦀</option>
            </select>
        </div>
    );
}