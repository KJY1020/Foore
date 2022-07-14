import { useRouter } from 'next/router';

export default function index() {

    const [Selected, setSelected] = useState("");
    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    
    return(
        <div>
            <select onChange={handleSelect} value = {Selected}>
                <option value=""disabled selected>🐟생선류🐟</option>
                <option value="thorn">가시, 뼈</option>
                <option value="scale">비늘</option>
                <option value="fin">지느러미</option>
                <option value="gut">내장, 껍질</option>
            </select>
        </div>
    );
}
