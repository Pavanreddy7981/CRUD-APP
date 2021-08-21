import React , {useState}from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Title, TextInput, Button } from 'react-native-paper';
import {connect , useDispatch} from "react-redux";
import { SET_ERROR, SET_POSTS, SET_POST } from '../actions/action.types';


const AddPostScreen = ({navigation}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();

    const addPost = async () => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: description,
                userId: 1,  
                }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((item) => 
                    dispatch({
                        type : SET_POST,
                        payload : item
                    })
            )
            setTitle("")
            setDescription("")

            navigation.navigate("Home")

        }

    return (
        <>
            <Appbar.Header style={{backgroundColor : "#1a97eb"}}>
                <Appbar.Action icon="menu"  onPress={() => navigation.toggleDrawer()}/>
                <Appbar.Content title="CRUD APP" titleStyle={{color:"white"}} />
            </Appbar.Header>

            <>
                <Title style={{textAlign :"center"}}>Create New Post</Title>
                 <TextInput
                    style={{marginHorizontal : 10,}}
                    mode="outlined"
                    label="Title"
                    placeholder="Type the title"
                    right={<TextInput.Affix text="/20" />}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInput
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
                onPress={addPost}
                style={{marginHorizontal:10, backgroundColor :"tomato"}} mode="contained">
                    Add Post
                 </Button>
            </>
        </>
    )
}

export default connect() (AddPostScreen)


