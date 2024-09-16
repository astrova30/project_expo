import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { getAllPosts } from "../appwrite"; 

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const result = await getAllPosts();
        setVideos(result);
      } catch (err) {
        setError(err);
        Alert.alert("Error", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { videos, loading, error };
};

export default useVideos;
