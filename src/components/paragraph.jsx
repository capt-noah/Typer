

function Paragraph({index, color, char}) {

    return (
        <span key={index} className={`${color}` }>{char}</span>
    )
}

export default Paragraph