import { useState } from "react"

const BgMode = () => {

    const [bgColor, setBgcolor] = useState('white')

    const bgHandler = (e) => {
        setBgcolor(e.target.value)
    }
    let textColor = ''

    if(bgColor === 'black' || bgColor === 'green' || bgColor === 'blue'){
        textColor = 'white'
    }else {
        textColor = 'black'
    }
    
    return (
        <div style={{background : bgColor, height : '100vh', color : textColor}}>
            <div className="bg-danger ms-auto d-flex justify-content-evenly" style={{ padding: '10px', }}>
                <div className="d-flex justify-content-evenly text-dark fw-bold fs-4">
                    <div>Home</div>
                    <div className="ms-3">About</div>
                    <div className="ms-3">Contact</div>
                    <div className="ms-3">Career</div>
                    <div className="ms-3">Services</div>
                </div>
                <div className="ms-auto">
                    <select className="form-control text-center" style={{ width: '150px' }} onChange={bgHandler}>
                        <option value=''>Select Theme</option>
                        <option value='black'>Dark Mode</option>
                        <option value='white'>Light Mode</option>
                        <option value='green'>Green Mode</option>
                        <option value='blue'>Navy Mode</option>
                    </select>
                </div>
            </div>
            <div>
                <h2>Welcome to Reactjs</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores omnis atque, voluptates magnam, perferendis sed alias pariatur quam, nam ipsam eaque temporibus accusantium autem quod. Odio consequatur sit odit vero voluptates autem. Assumenda repellendus quibusdam laudantium asperiores, nobis, in tempora maiores, exercitationem veritatis cumque ipsam. Repudiandae maiores sed accusamus vitae.
                </p>
            </div>
        </div>

    )
}

export default BgMode