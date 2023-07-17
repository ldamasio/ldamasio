function FavoriteStack() {

  const tools_webdev = [
  'Django',
  'FastAPI',
  'NodeJS',
  'ReactJS'
  ];
  
  const tools_data = [
  'PostgreSQL',
  'Redis',
  'MongoDB'
  ];
  
  const tools_devops = [
  'Docker',
  'Docker-compose',
  ];

  return (
    <div>
      <h2>Favorite Stack</h2>            
      <p>
        <h4>Web Development</h4>
        <ul>
          { tools_webdev.map( (tool_webdev) => <li>{ tool_webdev }</li>) }
        </ul>
      </p>
      <p>
        <h4>Data Warehousing</h4>
        <ul>
          { tools_data.map( (tool_data) => <li>{ tool_data }</li>) }
        </ul>
      </p>
      <p>
        <h4>DevOps</h4>
        <ul>
          { tools_devops.map( (tool_devops) => <li>{ tool_devops }</li>) }
        </ul>
      </p>
    </div>
  )
}

export default FavoriteStack
