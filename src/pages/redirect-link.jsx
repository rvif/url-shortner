import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, data, error, fn } = useFetch(getLongUrl, id);
  const { fn: fnStats } = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        await fn();
      } catch (error) {
        console.error("Error fetching URL:", error);
        navigate("/");
      }
    };

    if (id) {
      fetchAndRedirect();
    }
  }, [id]);

  useEffect(() => {
    const handleRedirect = async () => {
      if (!loading && data?.original_url) {
        try {
          // Store click statistics
          await fnStats();

          // Add protocol if missing
          let url = data.original_url;
          if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
          }

          // Perform the redirect
          window.location.href = url;
        } catch (error) {
          console.error("Error handling redirect:", error);
          navigate("/");
        }
      }
    };

    handleRedirect();
  }, [loading, data]);

  // Handle errors
  useEffect(() => {
    if (error) {
      console.error("Redirect error:", error);
      navigate("/");
    }
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <BarLoader width={"100%"} color="#36d7b7" />
      <p className="mt-4 text-center">Redirecting...</p>
    </div>
  );
};

export default RedirectLink;
