const Breadcrumb = () => {
    return (
        <nav aria-label="Breadcrumb">
            <ol>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <div>
                        <a href="#">Projects</a>
                    </div>
                </li>
                <li aria-current="page">FlowBite</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb