import profileConnectionsStyles from "@/styles/profileConnections.module.css"

export default function ProfileConnections(){
    return(
        <>
        <h2 className={profileConnectionsStyles.h2}>Connections</h2>
        
        <div className={profileConnectionsStyles.connectedUsers}>
            {/* insert profile photos of users the logged in user is connected to, which link to their profiles */}
        </div>
        </>
    )
}