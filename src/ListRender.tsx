import { useState } from "react"

export default function ListRender() {

    const [data] = useState(["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"])
    const [objData] = useState([
        { id: "1", name: 'person 1', age: 3, status: true },
        { id: "2", name: 'person 2', age: 5, status: false },
        { id: "3", name: 'person 3', age: 7, status: false },
        { id: "4", name: 'person 4', age: 1, status: true },
        { id: "5", name: 'person 5', age: 9, status: true },
    ])


    return (
        <>
            <h1>List render</h1>
            {
                data.map((value: any, index: any) => {
                    return (
                        <p key={index} className={value == "Person 3" ? 'text-danger' : ''}>{value} {value == "Person 5" && <span className="text-success">*</span>}</p>
                    )
                })
            }

            <hr />

            {
                objData.map((value: any) => {
                    return (
                        <>
                            {value.age > 5 &&
                                <p key={value.id} >{value.name} {value.status && <span className="text-success">*</span>}</p>
                            }
                        </>

                    )
                })
            }



        </>
    )
}