import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/Container/container.style"; 
import { useLazyGetPostListIdQuery} from "../../store/Api/postApi";
import { PostItem } from "../../components/PostItem/PostItem";

export const PostPage = () => {
    const { postId } = userParams();
    const [fetchTriger, { data, isError, isLoading }] = 
    useLazyGetPostListIdQuery();
    useEffect(() => {
        if (postId) {
            fetchTriger(postId);
        }
    }, [postId]);
    return (
        <Container>
            <PostItem
            postText={data?.message.main.text}
            regDate={data?.massage.reg.date}
            userName={data?.massage.user.fk.name}
            />
        </Container>
    )
} 