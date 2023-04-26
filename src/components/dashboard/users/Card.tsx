
type CardProps = {
   title: string,
   count: string,
   src: string,
   className: string,
}

export default function Card({ title, count, src, className}: CardProps) {

    return (
        <div className="card"> 
          <div className={`card-img-container ${className}`}>
          <img src={src} alt={`${src} icon`}/>
          </div>
          <p>{title}</p>
          <p>{count}</p>
        </div>
    )
}