import styles from './pages.module.css';
import addSymbol from './images/addSymbol.png'
import delSymbol from './images/delSymbol.png'

function CreateRecipe () {

    var last = null;
    var ingrCount = 1;

    const addIngredient = () => {
        last = document.getElementById('ingredientCreator').cloneNode(true)
       // last.id = "ingredientCreator" + ingrCount;
        const elementsThatHaveId = [...last.querySelectorAll('[id]')];
        if (last.matches('[id]')) {
            elementsThatHaveId.push(last);
        }
            elementsThatHaveId.forEach((e) => {
            e.id += ingrCount;
        });
        ingrCount++;
        document.getElementById('ingredientList').appendChild(last);
    }

    const removeIngredient = () => {
        if(ingrCount > 1){
            last = document.getElementById('ingredientCreator' + (ingrCount-1));
            ingrCount--;
            last.remove();
        }
    }

    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    const saveRecipeFunction = () => {
        //verifies the cook and prep time are in mins
        if(!/^\d+$/.test(document.getElementById('prep').value) || !/^\d+$/.test(document.getElementById('cook').value)){ 
            alert('Please enter cook and prep time in minutes');
            return;
        }
        console.log(genRanHex(24));
        const recipeData = {
          name: document.getElementById('recipeName').value,
          ingredients:[],
          steps: [],
          servings: document.getElementById('servings').value,
          prep: document.getElementById('prep').value,
          cook: document.getElementById('cook').value,
          notes: document.getElementById('notes').value
        }
        recipeData.ingredients.push(document.getElementById('ingrName').value + "_" + document.getElementById('ingrAmt').value + "_" + document.getElementById('ingrUnit').value);
        let Variables = []
        for (let i = 1; i < ingrCount; i++) {
            Variables[i] = document.getElementById('ingrName' + i).value + "_" + document.getElementById('ingrAmt' + i).value + "_" + document.getElementById('ingrUnit' + i).value;
            recipeData.ingredients.push(Variables[i]);
        }
        

        const myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");
        recipeData.steps = document.getElementById('steps').value.split(/\r?\n/) ;


        const raw = JSON.stringify({
        "_id": genRanHex(24),
        "recipe_name": document.getElementById('recipeName').value,
        "description": document.getElementById('notes').value,
        "ingredients": recipeData.ingredients,
        "time": parseInt(document.getElementById('prep').value, 10) + parseInt(document.getElementById('cook').value, 10),
        "steps":recipeData.steps,
        "user_name": localStorage.getItem("username")
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://localhost:8000/api/recipes/addRecipe", requestOptions)
        .then((response) => response.text())
        .then(() => {
            document.getElementById('exitText').innerHTML = 'Exit (Saved)'
        })
        .catch((error) => console.error(error));


    }
 

    return( 
        <div>
            <div className={styles.banner}>
                <div className={styles.recipeCreateTitleContainer}>
                    <div>
                        <p className={styles.recipeCreateTitleText}>Create A Recipe</p>
                    </div>
                </div>
            </div>
            <div className={styles.recipeCreateOuterContainer}>
                <div className={styles.recipeCreateInnerContainer}>
                    <div className={styles.recipeCreateInnererContainer}>
                        <div>
                            <p className={styles.recipeTitleText}>Recipe Name:</p>
                            <input type='text' placeholder='Recipe Name' className={styles.recipeInputBox} id='recipeName'></input>

                            <p className={styles.ingredientTitleText}>Ingredients:</p>
                            <div className={styles.addIngredientContainer}>
                                <p className={styles.addIngredientText}>Add Ingredient&nbsp;</p>
                                <div className={styles.addIngredientBtnContainer}><button onClick={addIngredient} className={styles.addIngredientButton}><img className={styles.addIngredientImg} src={addSymbol} alt='addIngredient'/></button></div>
                            </div>
                            <div id='ingredientList'>
                                <div className={styles.ingredientCreator} id='ingredientCreator'>
                                    <input type='text' placeholder='Ingredient' className={styles.recipeIngredientBox} id='ingrName'></input>
                                    <input type='text' placeholder='Amount' className={styles.recipeAmountBox} id='ingrAmt'></input>
                                    <select className={styles.recipeSelectBox} id='ingrUnit'> 
                                        
                                    <option value="cup">cup</option>
                                    <option value="pt">pt</option>
                                    <option value="qt">qt</option>
                                    <option value="gal">gal</option>
                                    <option value="pinch">pinch</option>
                                    <option value="dash">dash</option>
                                    <option value="tsp">tsp</option>
                                    <option value="tbsp">tbsp</option>
                                    <option value="oz">oz</option>



                                    </select>
                                    <br></br>
                                </div>
                            </div>
                            <div className={styles.addIngredientContainer}>
                                <p className={styles.addIngredientText}>Remove Ingredient&nbsp;</p>
                                <div className={styles.addIngredientBtnContainer}><button onClick={removeIngredient} className={styles.addIngredientButton}><img className={styles.addIngredientImg} src={delSymbol} alt='addIngredient'/></button></div>
                            </div>

                        </div>
                        <div>
                            <p className={styles.recipeTitleText}>Steps:</p>
                            <textarea placeholder='Steps' className={styles.recipeSteps} cols="50" rows="18" id='steps'></textarea>
                        </div>
                        <div className={styles.recipeDetailsContainer}>
                            <p className={styles.recipeTitleText}>Servings:</p>
                            <textarea placeholder='Servings' className={styles.recipeSteps} cols="50" rows="1" id='servings'></textarea>
                            <p className={styles.recipeTitleText}>Prep Time:</p>
                            <textarea placeholder='Enter time in minutes' className={styles.recipeSteps} cols="50" rows="1" id='prep'></textarea>
                            <p className={styles.recipeTitleText}>Cook Time:</p>
                            <textarea placeholder='Enter time in minutes' className={styles.recipeSteps} cols="50" rows="1" id='cook'></textarea>
                            <p className={styles.recipeTitleText}>Notes:</p>
                            <textarea placeholder='Notes' className={styles.recipeSteps} cols="50" rows="10" id='notes'></textarea>
                            <div className={styles.saveRecipeContainer}>
                                <button className={styles.saveRecipeBtn} onClick={saveRecipeFunction}><p className={styles.saveRecipeText}>Save Your Recipe</p></button>
                                <a href="/"><button className={styles.exitRecipeBtn}><p className={styles.saveRecipeText} id='exitText'>Exit Without Saving</p></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default CreateRecipe;