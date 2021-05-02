import recipecoverpage from '../images/recipeEngineImages/recipe_coverpage.JPG';
import recipe_information from '../images/recipeEngineImages/recipe_information.JPG';
import recipe_bookmark from '../images/recipeEngineImages/recipe_bookmark.JPG';
import new_recipe from '../images/recipeEngineImages/new_recipe.JPG';
import recipe_flowchart from '../images/recipeEngineImages/recipe_flowchart.JPG';
import publisher_subscriber_design from '../images/recipeEngineImages/publisher_subscriber_design.JPG';
import publisher_subscriber_design_code from '../images/recipeEngineImages/publisher_subscriber_design_code.JPG';
import recipe_update from '../images/recipeEngineImages/recipe_update.JPG';

export const recipeEngine = {
  id: '1',
  image: recipecoverpage,
  title: 'Summary',
  description:
    'This app is created for people to search recipes easier, and you can update the number of servings, bookmark recipes, create your own recipes on this page. On the left-hand side, it will list all the results, and the recipe information will display on the right-hand side when you click on the recipe.',
};

export const features = [
  {
    id: '1',
    image: recipe_information,
    title: 'Recipe Information(pagination and direction)',
    description:
      'The information will illustrate on the right-hand side, and you can click the direction button on the origin page and get the detail. Using Pagination to display recipes, so if there are many recipe results and the page will not display them at once.',
  },
  {
    id: '2',
    image: recipe_bookmark,
    title: 'Recipe Bookmark',
    description:
      'There is a bookmark button under the recipe cover picture, you can click it, and it will store at the local storage and marked on the bookmarks list.',
  },
  {
    id: '3',
    image: new_recipe,
    title: 'New Recipe',
    description:
      'Visitors can upload own recipes, and recipes will automatically be bookmarked, and those recipes can only see by their owner',
  },
];

export const projectPlanning = [
  {
    id: '1',
    image: recipe_flowchart,
    title: 'Recipe FlowChart',
    imageRemark: '',
    content:
      'Model and View are totally independant. All the files are stored into different folders to maintain the app readable and scalable. Model contains business logic (upload recipes, get search results, add bookmarks, load recipes, etc.), state of all the data, and HTTP library(fetch data from API). Controller contains the application logic(handle events and bridge between model and views). Views contain presentation logic (the visible part of the application)',
  },
  {
    id: '2',
    image: publisher_subscriber_design,
    title: 'Publisher-Subscriber Design pattern',
    imageRemark: '',
  },
  {
    id: '3',
    image: publisher_subscriber_design_code,
    imageRemark: 'code in controller.js',
  },
  {
    id: '4',
    image: recipe_update,
    title: 'Update Edited Information',
    imageRemark: 'code of update',
    content:
      'Only update the edited information, not the entire view. You need to get the entire new markup(edited markup like serving people ) and compare it to the old markup first. Therefore, you need to create a new markup but not render it.  Markup is a string, and it is hard to compare, so the markup needs to be converted to a DOM object that living in the memory and then compare with the actual DOM on the page.',
  },
];
