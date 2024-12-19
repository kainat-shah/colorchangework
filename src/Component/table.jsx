import "./table.css";
const Table = () => {
    const student =[
        {
            ID :1,
            Name:"Ali",
            class:"2nd",
        },
        {
            ID:2,
            Name:"Alisha",
            class:"2nd",
        },
        {
            ID:3,
            Name:"Alina",
            class:"2nd",
        },
        {
            ID:4 ,
            Name:"Aliya",
             class:"2nd",
        },

    ] 

    return (
      <>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
            </tr>
        </thead>
        <tbody>
        {student.map((student) => (
            <tr key={student}>
              <td>{student.ID}</td>
              <td>{student.Name}</td>
              <td>{student.class}</td>
            </tr>
        ))}
        </tbody>
    </table>
      
      </>
    );
  };
  export default Table;




















