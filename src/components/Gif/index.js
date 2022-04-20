import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Gif = ({images, title, import_datetime, id}) => {
      return(
        <Grid item xs={2}>
        <Card sx={{ maxWidth: 345, height: 400 }}>
          <CardMedia
            component="img"
            height="140"
            image={images.original.url}
            alt="gifImg"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" id="title">
              {title}
            </Typography>
            
            <Typography variant="caption" color="text.secondary">
            {import_datetime}
            {id}
            </Typography>
            
          </CardContent>

        </Card>
        </Grid>
        
      );
};

export default Gif;