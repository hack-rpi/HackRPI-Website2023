import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UgliestCodeCompetition = () => {
  const prizes = [
    { place: 'First Place Award', prize: 'An iPhone 15 Pro' },
    { place: 'Second Place Award', prize: 'An AirPods Max' },
    { place: 'Third Place Award', prize: 'An Apple Watch Series 9' },
  ];

  // some examples of ugly code fond online
  // https://www.quora.com/What-is-the-ugliest-yet-functional-piece-of-code-ever-written-by-you
  // https://dev.to/weeb/what-s-one-of-the-ugliest-piece-of-code-you-ve-written-so-far-1ej3

  // container of ugliest code
  const ugliestCodeArray = [
    {
      title: 'Ugliest Code 1',
      code: `public class Square 
{
    public static void main(String args[]) 
    {
        System.out.println("*"+"*"+"*"+"*"+"*"); 
        System.out.println("*"+"*"+"*"+"*"+"*"); 
        System.out.println("*"+"*"+"*"+"*"+"*"); 
        System.out.println("*"+"*"+"*"+"*"+"*"); 
        System.out.println("*"+"*"+"*"+"*"+"*"); 
    } 
}`,
    },
    {
      title: 'Ugliest Code 2',
      code: `int dow(int y, int m, int d) { 
    static int t[] = {0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4}; 
    y -= m < 3; 
    return (y + y/4 - y/100 + y/400 + t[m-1] + d) % 7; 
}`,
    },
    {
      title: 'Ugliest Code 3',
      code: `function S1E23(){
        document.getElementById("Season3div").style.display="none";
        document.getElementById("Season4div").style.display="none";
        document.getElementById("director").style.display="block";
        document.getElementById("directorname").innerHTML="<a target=blank href=https://www.imdb.com/name/nm0236173/?ref_=tt_ov_dr>Dermott Downs</a>";
        document.getElementById("episode23buttons").style.display="block";
        document.getElementById("episode2buttons").style.display="none";
        document.getElementById("episode3buttons").style.display="none";
        document.getElementById("episode4buttons").style.display="none";
        document.getElementById("episode5buttons").style.display="none";
        document.getElementById("episode6buttons").style.display="none";
        document.getElementById("episode7buttons").style.display="none";
        document.getElementById("episode8buttons").style.display="none";
        document.getElementById("episode9buttons").style.display="none";
        document.getElementById("episode10buttons").style.display="none";
        document.getElementById("episode11buttons").style.display="none";
        document.getElementById("episode12buttons").style.display="none";
        document.getElementById("episode13buttons").style.display="none";
        document.getElementById("episode14buttons").style.display="none";
        document.getElementById("episode15buttons").style.display="none";
        document.getElementById("episode16buttons").style.display="none";
        document.getElementById("episode17buttons").style.display="none";
        document.getElementById("episode18buttons").style.display="none";
        document.getElementById("episode19buttons").style.display="none";
        document.getElementById("episode20buttons").style.display="none";
        document.getElementById("episode21buttons").style.display="none";
        document.getElementById("episode22buttons").style.display="none";
        document.getElementById("episode1buttons").style.display="none";
        document.getElementById("Season2div").style.display="none";
        document.getElementById("Season1div").style.display="block";
        document.getElementById("review").style.display="block";
        document.getElementById("reviewlink").style.display="block";
        document.getElementById("reviewlink").innerHTML="<a target=blank href=http://www.ign.com/articles/2015/05/20/the-flash-fast-enough-review>Read here</a>";
    
        document.getElementById("trailer").style.display="block"
        document.getElementById("promo").style.display="block"
        document.getElementById("promo").innerHTML="<a target=blank href=https://www.youtube.com/watch?v=Qx90DwHjIvk>Watch here</a>";
    
        document.getElementById("episodeinformation").style.display="block";
        document.getElementById("episoderate").style.display="block";
        document.getElementById("episodedate").style.display="block";
        document.getElementById("episodelength").style.display="block";
        document.getElementById("date").innerHTML="19 May 2015";
        document.getElementById("star").style.display="block";
        document.getElementById("length").innerHTML="44 min";
        document.getElementById("ratenumber").innerHTML="9.6";
        document.getElementById("episodeimage").src="s1e23.png";
        document.getElementById("episodetitle").innerHTML = "<div id=episodetitle>Season 1 Episode 23:Fast Enough</div>";
        document.getElementById("episodedescription").innerHTML="<p> Once the preparations were set for Barry to travel back in time,"+
    " he traveled back to the night Nora died. However, despite this,"+
    " Barry's alternative future self saw Barry and signaled him to not to interfere and proceeded"+
    " to transport his younger self 20 blocks away.<br><br> Barry, in tears, obeyed. He spoke to Nora once last time,"+
    " revealing his identity to her, and assured her that he and Henry are okay in the future."+
    " In the present, Eobard gets into the time machine Cisco made,"+
    " remarking that Rip Hunter first designed it.<br><br> Cisco warns him never to return."+
    " Suddenly, a helmet with wings on top comes out of the wormhole, which Eobard takes as his signal to leave. "+
    "However, Barry returns, destroying the time machine with a supersonic punch.</p>";
    
      }
    }`,
    },
  ];

  const [showWindows, setShowWindows] = useState(Array(ugliestCodeArray.length).fill(false));
  const [selectedPrize, setSelectedPrize] = useState({});

  const sectionStyle = {
    padding: '20px',
    background: 'url("unset") no-repeat center center',
    backgroundSize: 'cover',
    textAlign: 'center',
    position: 'relative',
  };

  const h1Style = {
    color: '#f50057',
    fontSize: '2.5em',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'rgb(145, 3, 7)',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    borderRadius: '5px',
  };
      
  const awardsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const articleStyle = {
    flex: 1,
    marginRight: '10px',
    border: '1px solid #eee',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const h2Style = {
    color: '#f50057',
    marginBottom: '10px',
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#000',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    width: '50%',   
    height: '50%',  
  };

  const popupButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px', 
  };
  
  
  const popupCodeContainerStyle = {
    width: '80%',
    height: '80%',
    overflow: 'hidden',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
  };

  const codeStyle = {
    ...dark,
    fontSize: '14px',
    lineHeight: '1.6',
    borderRadius: '5px',
    padding: '20px',
    margin: '0',
  };
    
  const toggleWindow = (index) => {
    const newShowWindows = [...showWindows];
    newShowWindows[index] = !newShowWindows[index];
    setShowWindows(newShowWindows);
    setSelectedPrize(ugliestCodeArray[index]);
  };
  
  return (
    <section id="ugliest-code-competition" style={sectionStyle}>
      <h1 style={h1Style}>UGLIEST CODE COMPETITION</h1>
      <p>An "Ugliest Code Competition" is a humorous contest where programmers intentionally create the most convoluted and poorly written code.</p>
      <button style={buttonStyle} onClick={() => toggleWindow(0)}>
        Join now
      </button>
      <div className="awards" style={awardsStyle}>
        {prizes.map((prize, index) => (
          <article key={index} style={articleStyle} onClick={() => toggleWindow(index)}>
            <h2 style={h2Style}>{prize.place}</h2>
            <p>{prize.prize}</p>
          </article>
        ))}
      </div>
      {showWindows.map((showWindow, index) => (
        showWindow && (
          <div key={index} style={popupStyle}>
            <h2>{selectedPrize.title}</h2>
            <div style={popupCodeContainerStyle}>
              <SyntaxHighlighter language="java" style={codeStyle}>
                {selectedPrize.code}
              </SyntaxHighlighter>
            </div>
            <button style={popupButtonStyle} onClick={() => toggleWindow(index)}>
              Close
            </button>
          </div>
        )
      ))}
    </section>
  );
};

export default UgliestCodeCompetition;
