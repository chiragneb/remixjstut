export default function NewJokeRoute() {
    return (
        <div>
            <p>Add your own Joke</p>
            <form method = "post">
                <div>
                    <label>
                        Name: <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        content: <textarea name="content" />
                    </label>
                </div>
                <button type="submit" className="button">
                    Add
                </button>
            </form>
        </div>
    )
}