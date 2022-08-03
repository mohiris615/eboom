import ForumLayout from "../../components/forum/ForumLayout";
import {ImUpload3} from "react-icons/im";

function TopicAdd() {
    return(
        <ForumLayout>
          <div className="add-new-topic">
              <form action="">
                  <div className="input-group">
                      <p>
                          <select name="category" id="category">
                              <option>Choose categories</option>
                              <option>Programming</option>
                              <option>Tests</option>
                              <option>IoT</option>
                          </select>
                      </p>
                    <p>
                        <input type="text" name="title" placeholder="Type catching attention title"/>
                    </p>
                  </div>
                  <div className="btn-group">
                      <p className="file-input">
                          <input type="file" name="topicImage" id="topicImage"/>
                          <label htmlFor="topicImage">
                              <ImUpload3 />
                          </label>
                      </p>
                      <button className="btn-save">Save as draft</button>
                      <button className="btn-publish">Publish</button>
                  </div>
                  <div className="textarea-group">
                      <textarea name="content" placeholder="Type your question">
                      </textarea>
                  </div>
              </form>
          </div>
        </ForumLayout>
    )
}

export default TopicAdd;