/**
 * The PrivedRoutes Component handels all possible routes. 
 * Routing is used for linking the Sidebar-MenuItems to Components 
 * on the right handside canvas.
 * 
 * @author Martin Wagner
 * @author Irem Toroslu
 */

import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import DetailsComponent from 'components/details/DetailsComponent';
import { useTheme, createUseStyles } from 'react-jss';
const ProductSolutionsServices = lazy(() =>
    import('./dynamicPaths/ProductSolutionsServicesComponent')
);
// importing required components
const DashboardComponent = lazy(() => import('../components/dashboard'));
const useStyles = createUseStyles((theme) => ({

    container: {
      display: 'flex'
  
    },
    textcontent: {
        ...theme.typography.textcontent,
        textAlign: 'left',
        '@media (max-width: 768px)': {
            display: 'none',
            
  
            
        }
    },
  
    subtitle: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: -50,
  
        },
        '@media (max-width: 468px)': {
            fontSize: 50,
  
        }
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 80,
  
        },
        '@media (max-width: 468px)': {
            fontSize: 50,
  
        }
    }
  }));
/**
 * Defining new Routes using private routes function
 * linking Components to the selected Menuitem in the "Sidebar component"
  */
function PrivateRoutes() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                
                <Route exact path={SLUGS.categories} render={() => <div className={classes.subtitle}>categories</div>} />

                <Route exact path={SLUGS.generation}
                    render={() => <div className={classes.subtitle}>Short info about Generation category</div>}
                />
                <Route exact path={SLUGS.transmission}
                    render={() => <div className={classes.subtitle}>Short info about Transmission category</div>}
                />
                <Route exact path={SLUGS.industrialApplications}
                    render={() => <div className={classes.subtitle}>Short info about Industrial Applications</div>}
                />
                
                <Route path={SLUGS.generation + '/:type'}
                    component={ProductSolutionsServices}
                />
                <Route path={SLUGS.transmission + '/:type'}
                    component={ProductSolutionsServices}
                />
                <Route path={SLUGS.industrialApplications + '/:type'}
                    component={ProductSolutionsServices}
                />
                
                <Route exact path={SLUGS.details}
                    // hardcoded selected model (Transformer 3-phase#1), TODO: it should be passed by its parent state
                    render={() => <DetailsComponent selectedModel='Transformer 3-phase#1' />}
                />

                <Route exact path={SLUGS.settings}      render={() => <div className={classes.subtitle}>settings</div>} />

                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
