import React from "react";
import ImageUploader from 'react-images-upload';

class MyProfile extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}


export default MyProfile;


// class MyProfile extends React.Component {
//     render() {
//         return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlkljCLpfhOw_JfqnA3iIjVQvgeRQU9oEn3LV7a9EcuKZCeDPxQ" />
//     }
// };


