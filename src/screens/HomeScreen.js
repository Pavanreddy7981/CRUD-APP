import React, {useState, useEffect} from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import SinglePost from '../components/SinglePost';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { SET_ERROR, SET_POSTS } from '../actions/action.types';
import {connect,useDispatch} from "react-redux"

const HomeScreen = ({navigation, posts,loading}) => {
    
    const dispatch = useDispatch();

    const fetchDetails = async() => {
        try {
            const response = await 
                fetch("https://jsonplaceholder.typicode.com/posts")
            
                let posts = await response.json();
                    dispatch({
                        type : SET_POSTS,
                        payload : posts
                    })
        } catch (error) {
                console.log(error);
                    dispatch({
                        type : SET_ERROR,
                        payload : true
                })
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [])
    
    return (
        <>
            <Appbar.Header style={{backgroundColor : "#1a97eb"}}>
                <Appbar.Action icon="menu"  onPress={() => navigation.toggleDrawer()}/>
                <Appbar.Content title="CRUD APP" titleStyle={{color:"white"}} />
            </Appbar.Header>
            <>
            {loading ? 
                <>
                    <View style={styles.container}>
                        <ActivityIndicator animating={true}  color={"dodgerblue"} />
                    </View>
                </> 
                    : 
                <>
                    <ScrollView>
                        {posts.map((item) => (
                            <SinglePost key={item.id} post={item}/>
                        ))}
                    </ScrollView>
                </>
            }
            </>
        </>
    )
}
const mapStateToProps = (state) => ({
    
    posts : state.post.posts,
    loading : state.post.loading
})

export default connect(mapStateToProps) (HomeScreen)

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems  : "center"
    }
})
