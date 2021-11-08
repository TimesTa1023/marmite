import Link from 'next/link'
import Image from 'next/image'
export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields
    return (
        <div className='card'>
            <div className='featured' style={{borderRadius: '20px', overflow: 'hidden'}}>

                <Image 
                    src={'https:' + thumbnail.fields.file.url}
                    width={/*thumbnail.fields.file.details.image.width*/600}
                    height={/*thumbnail.fields.file.details.image.height*/400}
                    
                    
                />

            </div>
            <div className='content'>
                <div className='info'>
                    <h4>{title} </h4>
                    <p> Take approx {cookingTime} Mins to Make</p>
                </div>
                <div className='actions'>
                <Link href={'/recipes/' + slug} ><a>Try Recipe</a></Link>
                </div>
            </div>
            <style jsx > {`
            .content {
          transform: rotateZ(-4deg);
          border-radius: 20px;
          border: 1px solid #2E2829;
          
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -100px;
          left: -15px;
          width: 450px;
          
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
          font-size: 14px;
        }
        .actions {
          
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          border-top-left-radius: 20px;
          border-bottom-right-radius: 10px;
          color: #fff;
          background: #2E2829;
          padding: 16px 24px;
          text-decoration: none;
        }
        .actions a:hover {
            background: transparent;
            color: #706869;
        }
        .featured {
            transform: rotateZ(-2deg);
        }
            `} </style>
        </div>
    )
}
