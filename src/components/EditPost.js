import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Title, TextInput, Button } from 'react-native-paper';
import { connect, useDispatch } from 'react-redux';
import { UPDATE_POST } from '../actions/action.types';

const EditPost = ({post, refRBSheet}) => {
    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.body);
    const dispatch = useDispatch()

    const updatePost = () => {
        dispatch({
            type : UPDATE_POST,
            id : post.id,
            title : title,
            description : description
        })

        refRBSheet.current.close()

    }

    return (
        <>
        <Title style={{textAlign :"center"}}>Edit Post</Title>
        <Title style={{textAlign :"center",color:"red"}}>ID - {post.id}</Title>

                 <TextInput
                    style={{marginHorizontal : 10}}
                    multiline
                    mode="outlined"
                    label="Title"
                    numberOfLines={2}
                    placeholder="Type the title"
                    right={<TextInput.Affix text="/20" />}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    
                />
                <TextInput
                     numberOfLines={4}
                     multiline
                    style={{margin : 10}}
                    keyboardType="twitter"
                    mode="outlined"
                    label="Description"
                    placeholder="Type the description of the post"
                    right={<TextInput.Affix text="/100" />}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
                <Button
                onPress={updatePost}
                style={{marginHorizontal:10, backgroundColor :"tomato"}} mode="contained">
                    Edit Post
                 </Button>
            </>
    )
}

export default connect()(EditPost)

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center",
        
    },
    text : {
        fontSize : 20,
        color : "red"
    }
})
