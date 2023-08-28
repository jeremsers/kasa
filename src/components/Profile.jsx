function Profile({name,picture}) {
    const nameSep = name.split(' ')
    return (  
        <div className="profile">
                        <img src={picture} alt={name}></img>
                        <div className="profile-name">
                        <p>{nameSep[0]}</p>
                        <p>{nameSep[1]}</p>

                        </div>
                    </div>
    );
}

export default Profile;