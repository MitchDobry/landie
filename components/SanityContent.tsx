import React, { useState, useEffect } from "react";
import Image from "next/image";

import sanityClient from "../client.js";

function SanityContent() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post]{
            _createdAt,
            _id,
            _rev,
            _type,
            _updatedAt,
            articleMainParagraph1,
            articleMainParagraph2,
            articleMainTitle,
            articleSmallImage1{
                _type,
                asset->{
                    _type,
                    asset{
                      _ref,
                      _type
                }
              }
            },
            articleSmallImage2{
                _type,
                asset->{
                    _type,
                    asset{
                      _ref,
                      _type
                }
            },
            articleSmallParagraph1,
            articleSmallParagraph2,
            articleSmallTitle1,
            articleSmallTitle2,
            mainImage{
                _type,
                asset->{
                    _type,
                    asset{
                      _ref,
                      _type
                }
              }
            }
          }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  });
  console.log(postData);
  return (
    <main className="min-h-screen p-12">
      {/* {postData &&
        postData.map((post, index) => ( */}
      <section className="container mx-auto">
        <div>
          <div>
            <h2 className="text-5xl flex justify-start font-bold text-gray-600 mb-16">
              {postData?.articleMainTitle}
            </h2>
            <div>
              <article>
                <p>{postData.articleMainParagraph1}</p>
                <p>{postData.articleMainParagraph2}</p>
              </article>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div>
                <Image
                  src={postData.articleSmallImage1}
                  alt={postData.articleSmallImage1}
                  width={500}
                  height={500}
                  className="absolute left-0 "
                />
                <h3>{postData.articleSmallTitle1}</h3>
                <p>{postData.articleSmallParagraph1}</p>
              </div>
              <div>
                <Image
                  src={postData.articleSmallImage2}
                  alt={postData.articleSmallImage2}
                  width={500}
                  height={500}
                  className="absolute left-0 "
                />
                <h3>{postData.articleSmallTitle2}</h3>
                <p>{postData.articleSmallParagraph2}</p>
              </div>
            </div>
          </div>
          <Image
            src={postData.articleMainImage}
            alt={postData.articleMainImage}
            width={500}
            height={500}
            className="absolute right-0 -z-10 object-cover"
          />
        </div>
      </section>
      {/* ))} */}
    </main>
  );
}

export default SanityContent;
