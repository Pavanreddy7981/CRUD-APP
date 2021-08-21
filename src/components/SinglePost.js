import React, {useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph, Button, Snackbar } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import EditPost from './EditPost';
import { connect, useDispatch } from 'react-redux';
import { DELETE_POST } from '../actions/action.types';

const SinglePost = ({post}) => {
     const refRBSheet = useRef();
     const dispatch = useDispatch()

    const deletePost = () => {
       dispatch({
           type : DELETE_POST,
           payload : post.id
       })
      
    }
    return (
        <Card style={{marginVertical : 5}} key={post.id}>
            <Card.Content>
                <Title style={{color:"#35a13a"}}>{post.title}</Title>
                <Paragraph style={{color : "gray"}}>{post.body}</Paragraph>
            </Card.Content>
             <Card.Actions>
                <Button color="tomato" onPress={() => refRBSheet.current.open()}>  EDIT </Button>
                <Button color="red" onPress={deletePost}> DELETE</Button>
            </Card.Actions>
             <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={400}
                closeOnPressMask={false}
                 customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                    backgroundColor: "#000"
                    },
                    
                }}
            >
                <EditPost post={post} refRBSheet={refRBSheet}/>
            </RBSheet>
        </Card>
    )
}

export default connect()(SinglePost)


