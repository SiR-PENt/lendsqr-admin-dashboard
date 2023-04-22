
type CardProps = {
   title: string,
   count: number,
   src: string,
}

export default function Card({ title, count, src }: CardProps) {

    return (
        <div className="card"> 
          <img src={src} alt={`${src} icon`}/>
          <p>{title}</p>
          <p>{count}</p>
        </div>
    )
}