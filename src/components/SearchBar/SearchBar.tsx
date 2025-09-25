import css from './SearchBar.module.css'


interface Props {
    onSearch: (topic: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const handleSubmit = (formData: FormData) => {
        const topic = formData.get('topic') as string;
        onSearch(topic)
    }

    return (
        <form className={css.form} action={handleSubmit}>
            <input className={css.input} type="text" name="topic" />
            <button type="submit">Search</button>
        </form>
    );
}