<?php

namespace walkingcodeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

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

    /**
     * @Route("/promoteUser")
     */
    public function promoteUserAction(){

        $user = $this->getUser();

        $userManager = $this->get('fos_user.user_manager');
        $user->addRole('ROLE_ADMIN');
        $userManager->updateUser($user);

        return new Response("Role user granted");
    }
}
