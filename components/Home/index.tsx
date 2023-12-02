import Paper from "@mui/material/Paper"
import  Button from "@mui/material/Button"

const HomeComponent = () => {
    return <div>
        <h1> Welcome to CodeZen - Next Level Coding </h1>
        <Paper elevation={1} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            textAlign: 'center' 
        }}>
            <p>
                Experience the all new coding challenges. 
                <br/>Test your skills and get ready to test your limit too.
            </p>
            <Button variant="contained" style={{ width: '150px', margin: 'auto' }}> Get Started </Button>
        </Paper>
    </div>
}

export default HomeComponent