<?php

namespace walkingcodeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        // replace this example code with whatever you need
        $name = $this->getUser();

        //return new Response($match->getSumId()." ".$match->getSumName()." : ".$user->getEmail());
        return $this->render(
            'walkingcodeBundle:Default:index.html.twig',
            array('user_name' => $name));
    }
}
