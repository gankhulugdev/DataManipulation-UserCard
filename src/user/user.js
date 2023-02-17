export default function User({ user, color }) {
  return (
    <div
      style={{
        margin: "5px",
        padding: "5px",
        width: "500px",
        border: "1px solid black",
        borderRadius: '5px'
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "2px",
              backgroundColor: "#d3d3d3",
              borderRadius: "5px",
              width: "50px",
              height: "50px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src={user.avatar}
              alt="image"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontWeight: "500" }}
            >{`${user.first_name} ${user.last_name}`}</span>
            <span>{user.username}</span>
          </div>
        </div>

        <dlv
          style={{
            padding: "5px 10px",
            margin: "5px",
            backgroundColor: color,
            borderRadius: "20px",
          }}
        >
          {user.subscription.plan}
        </dlv>
      </div>
      <hr />
      <div style={{ display: "flex", width:'100%' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",  
            margin: '5px',
            width: "50%"
          }}
        >
          <div>
            <div style={{ fontSize: "12px" }}>Gender</div>
            <div>{user.gender}</div>
          </div>
          <div>
            <div style={{ fontSize: "12px" }}>Email</div>
            <div>{user.email}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: '5px',
            width: "50%"
          }}
        >
          <div>
            <div style={{ fontSize: "12px" }}>Phone</div>
            <div>{user.phone_number}</div>
          </div>
          <div>
            <div style={{ fontSize: "12px" }}>DOB</div>
            <div>{user.date_of_birth}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
